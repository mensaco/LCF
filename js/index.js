

window.App = () => {
    return {
        
        'dCFdF': {
            r(x){
                return Math.round(x * 100.0 + 0.5) / 100.0
            },
            'F': Alpine.$persist(3.5),
            'dF': Alpine.$persist(0.3),
            'dC': Alpine.$persist(30),
            k() {
                const F = this.F * 1.0
                const dF = this.dF * 1.0
                const k = (F + dF) / F
                return k

            },
            C() {
                const k = this.k() * 1.0
                const dC = this.dC * 1.0
                const r = dC / (1 - 1 / k / k)
                return this.r(r) / 100
            },
            L() {
                var d = 2 * 3.1415 * this.F * 1.0
                d *= d
                const CC = this.C() + this.dC * 1.0
                d *= CC
                return this.r(d) / 100
            }
        },
        'DLN': {
            r(x){
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