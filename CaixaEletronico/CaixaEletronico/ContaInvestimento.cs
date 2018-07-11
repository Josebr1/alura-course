﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaixaEletronico
{
    class ContaInvestimento : Conta, ITributavel
    {

        public double CalculaTributo()
        {
            return this.Saldo * 0.03;
        }

        public override void Saca(double valor)
        {
            this.Saldo -= valor;
        }
    }
}
