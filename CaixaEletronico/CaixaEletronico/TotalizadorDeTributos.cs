using Caelum.CaixaEletronico.Contas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Caelum.CaixaEletronico.Banco
{
    class TotalizadorDeTributos
    {
        public double Total { get; private set; }

        public void Acumula(ContaPoupanca cp)
        {
            this.Total += cp.CalculaTributo();
        }

        public void Acumula(ITributavel ci)
        {
            this.Total += ci.CalculaTributo();
        }
    }
}
