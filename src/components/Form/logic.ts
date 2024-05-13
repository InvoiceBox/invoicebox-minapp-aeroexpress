const DEFAULT_MAX_DAYS_TO = 180;

class Logic {
    private toStartOfDay(date: Date): void {
        date.setHours(0, 0, 0, 0);
    }

    private toEndOfDay(date: Date): void {
        date.setHours(23, 59, 59, 999);
    }

    private addDays(date: Date, days: number): void {
        date.setDate(date.getDate() + days);
    }

    private getTariffMinDate(tariff: { daysFrom: number }): Date {
        const date = new Date();
        this.toStartOfDay(date);
        this.addDays(date, tariff.daysFrom);
        return date;
    }

    private getTariffMaxDate(tariff: { daysTo: number }): Date {
        const date = new Date();
        this.toEndOfDay(date);
        this.addDays(date, tariff.daysTo);
        return date;
    }

    getMinDate(tariffs: { daysFrom: number }[]): Date {
        const minDates = tariffs.map((tariff) => this.getTariffMinDate(tariff));

        const minDate = minDates.length
            ? new Date(Math.min(...minDates.map((date) => date.valueOf())))
            : (() => {
                  const date = new Date();
                  this.toStartOfDay(date);
                  return date;
              })();

        return minDate;
    }

    getMaxDate(tariffs: { daysTo: number }[]): Date {
        const maxDates = tariffs.map((tariff) => this.getTariffMaxDate(tariff));

        const maxDate = maxDates.length
            ? new Date(Math.max(...maxDates.map((date) => date.valueOf())))
            : (() => {
                  const date = new Date();
                  this.toEndOfDay(date);
                  this.addDays(date, DEFAULT_MAX_DAYS_TO);
                  return date;
              })();

        return maxDate;
    }

    isDateMatchTariff(date: Date, tariff: { daysFrom: number; daysTo: number }): boolean {
        const minDate = this.getTariffMinDate(tariff);
        const maxDate = this.getTariffMaxDate(tariff);

        return date >= minDate && date <= maxDate;
    }

    private getSum(tariff: { price: number }, ticketsCount: number): string {
        const sum = (tariff.price * ticketsCount).toFixed(2).replace(/0$/, '').replace(/\.0$/, '');
        return `${sum} ₽`;
    }

    getSumForDisplay(tariff: { price: number } | undefined, ticketsCount: number | null): string {
        if (!tariff || ticketsCount === null) return '';
        return this.getSum(tariff, ticketsCount);
    }
}

export const logic = new Logic();
