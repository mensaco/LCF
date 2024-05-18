

window.App = () => {
    return {
        showImage: false,
        imageSrc: '',
        'dCFdF': {
            r(x) {
                return Math.round(x * 100.0 + 0.4999) / 100.0
            },
            'Fl': Alpine.$persist(3.4),
            'Fh': Alpine.$persist(3.9),
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
                return Math.round(x * 100.0 + 0.4999) / 100.0
            },
            'N': Alpine.$persist(24),
            'D': Alpine.$persist(3.4),
            'L': Alpine.$persist(3.4),
            ToL() {
                const r = this.D * 1.0 / 2.0 / 2.54
                const l = this.L * 1.0 / 2.54
                const n = this.N * 1.0
                return this.r(r * r * n * n / (9 * r + 10 * l))
            },
            LRR() {
                const r = this.D * 1.0 / 2.0
                const l = this.L * 1.0
                const ar = l / r
                return ar
            }
        },
        'VZ': {
            r(x) {
                return Math.round(x * 100.0 + 0.4999) / 100.0
            },
            C1: Alpine.$persist(33),
            C2: Alpine.$persist(510),
            C3() {
                return this.C1 * 6.0;
            },
            C3M: Alpine.$persist(220),
            Ce() {
                const c1 = this.C1 * 1.0
                const c2 = this.C2 * 1.0
                const c3 = this.C3M ? this.C3M * 1.0 : this.C3() * 1.0

                const ce = c2 + c1 * c3 / (c1 + c3)
                return ce
            },
            L: Alpine.$persist(4.0),
            F() {
                const l = this.L * 1.0
                const ce = this.Ce()
                const f = 500 / (Math.PI * Math.sqrt(l * ce))
                return f
            }

        },
        'SC': { // air capacitance between two metal plates (half discs)
            r(x) {
                return Math.round(x * 100.0 + 0.4999) / 100.0
            },
            rad: Alpine.$persist(5), // inner radius in mm
            Rad: Alpine.$persist(50), // outer radius in mm
            gap: Alpine.$persist(1), // gap between the plates radius in mm
            eps: 8.854e-12, // air permitivity
            C() {
                const retv = 1e9 * this.eps * (this.Rad * this.Rad - this.rad * this.rad) * 3.1415 / 2.0 / this.gap
                return retv
            }
        }

    }
}