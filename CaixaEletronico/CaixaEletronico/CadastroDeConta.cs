using Caelum.CaixaEletronico.Clientes;
using Caelum.CaixaEletronico.Contas;
using CaelumCaixaEletronico;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CaixaEletronico
{
    public partial class CadastroDeConta : Form
    {
        private Form1 aplicacaoPrincipal;
        private string TipoConta;

        public CadastroDeConta(Form1 aplicacaoPrincipal)
        {
            this.aplicacaoPrincipal = aplicacaoPrincipal;
            InitializeComponent();
        }

        private void btnCadastro_Click(object sender, EventArgs e)
        {
            Conta novaConta = null;
            

            if (comboTipoConta.Text == "Poupanca")
            {
                novaConta = new ContaPoupanca();
            }
            else
            {
                novaConta = new ContaCorrente();
            }

            novaConta.Numero = Convert.ToInt32(numeroDaConta.Text);
            novaConta.Titular = new Cliente(titularConta.Text);
            this.aplicacaoPrincipal.AdicionaConta(novaConta);
        }

        
    }
}
