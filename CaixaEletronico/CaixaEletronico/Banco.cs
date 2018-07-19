using Caelum.CaixaEletronico.Contas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Caelum.CaixaEletronico.Banco
{
    class Banco
    {
        private Conta[] contas = new Conta[10];

        private int quantidade;

        public void Adiciona(Conta conta)
        {
            this.contas[this.quantidade] = conta;
            this.quantidade++;
        }
    }
}
