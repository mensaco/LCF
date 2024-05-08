

window.App = () => {
    return {

        'dCFdF': {
            r(x) {
                return Math.round(x * 100.0 + 0.5) / 100.0
            },
            'Fl': Alpine.$persist(3.5),
            'Fh': Alpine.$persist(0.3),
            'dC': Alpine.$persist(30),
            k() {
                const Fl = this.Fl * 1.0
                const Fh = this.Fh * 1.0
                const k = Fh / Fl
                return k

            },
            C() {
                const Fl = this.Fl * 1.0
                const Fh = this.Fh * 1.0
                const dC = this.dC * 1.0
                const r = dC / (1 - (Fl / Fh) * (Fl / Fh))
                return r
            },
            L() {
                const Fh = this.Fh * 1.0
                const C = this.C() * 1.0
                const r = 1e6 / ((2 * Math.PI * Fh) * (2 * Math.PI * Fh) * C)
                return r
            }
        },
        'DLN': {
            r(x) {
                return Math.round(x * 100.0 + 0.5) / 100.0
            },
            'N': Alpine.$persist(1),
            'D': Alpine.$persist(1),
            'L': Alpine.$persist(1),
            ToL() {
                const r = this.D * 1.0 / 2.0 / 2.54
                const l = this.L * 1.0 / 2.54
                const n = this.N * 1.0
                return this.r(r * r * n * n / (9 * r + 10 * l))
            }
        }

    }
}