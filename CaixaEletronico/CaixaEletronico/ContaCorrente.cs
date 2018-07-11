using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaixaEletronico
{
    class ContaCorrente : Conta
    {
        private static int totalDeContas = 0;

        public override void Saca(double valor)
        {
            /*if (valor > this.Saldo || valor < 0)
            {
                //return false;
            }
            else
            {*/
                this.Saldo -= (valor + 0.1);
                //return true;
            //}
        }

        public static int ProximaConta()
        {
            return ContaCorrente.totalDeContas + 1;
        }
    }
}
