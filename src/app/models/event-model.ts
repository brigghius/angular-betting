export interface EventModel {
    id: number,
    name: string,
    sport: string,
    categoria: string,
    quote: {
        unoVince: number,
        pareggio: number,
        dueVince: number
    }
}