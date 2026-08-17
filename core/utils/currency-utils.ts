export class CurrencyUtils {

    static parseCurrency(value: string): number {
        return Number(
            value
                .replace('đ', '')
                .replace(/\./g, '')
                .trim()
        );
    }
}