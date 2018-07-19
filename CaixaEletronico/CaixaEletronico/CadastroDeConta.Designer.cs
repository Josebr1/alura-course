namespace CaixaEletronico
{
    partial class CadastroDeConta
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.titularConta = new System.Windows.Forms.TextBox();
            this.numeroDaConta = new System.Windows.Forms.TextBox();
            this.contextMenuStrip1 = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.btnCadastro = new System.Windows.Forms.Button();
            this.comboTipoConta = new System.Windows.Forms.ComboBox();
            this.SuspendLayout();
            // 
            // titularConta
            // 
            this.titularConta.Location = new System.Drawing.Point(12, 22);
            this.titularConta.Name = "titularConta";
            this.titularConta.Size = new System.Drawing.Size(193, 20);
            this.titularConta.TabIndex = 0;
            // 
            // numeroDaConta
            // 
            this.numeroDaConta.Location = new System.Drawing.Point(12, 59);
            this.numeroDaConta.Name = "numeroDaConta";
            this.numeroDaConta.Size = new System.Drawing.Size(193, 20);
            this.numeroDaConta.TabIndex = 1;
            // 
            // contextMenuStrip1
            // 
            this.contextMenuStrip1.Name = "contextMenuStrip1";
            this.contextMenuStrip1.Size = new System.Drawing.Size(61, 4);
            // 
            // btnCadastro
            // 
            this.btnCadastro.Location = new System.Drawing.Point(69, 130);
            this.btnCadastro.Name = "btnCadastro";
            this.btnCadastro.Size = new System.Drawing.Size(75, 23);
            this.btnCadastro.TabIndex = 3;
            this.btnCadastro.Text = "Cadastro";
            this.btnCadastro.UseVisualStyleBackColor = true;
            this.btnCadastro.Click += new System.EventHandler(this.btnCadastro_Click);
            // 
            // comboTipoConta
            // 
            this.comboTipoConta.FormattingEnabled = true;
            this.comboTipoConta.Items.AddRange(new object[] {
            "Corrente",
            "Poupanca"});
            this.comboTipoConta.Location = new System.Drawing.Point(12, 86);
            this.comboTipoConta.Name = "comboTipoConta";
            this.comboTipoConta.Size = new System.Drawing.Size(193, 21);
            this.comboTipoConta.TabIndex = 4;
            // 
            // CadastroDeConta
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(217, 176);
            this.Controls.Add(this.comboTipoConta);
            this.Controls.Add(this.btnCadastro);
            this.Controls.Add(this.numeroDaConta);
            this.Controls.Add(this.titularConta);
            this.Name = "CadastroDeConta";
            this.Text = "CadastroDeConta";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox titularConta;
        private System.Windows.Forms.TextBox numeroDaConta;
        private System.Windows.Forms.ContextMenuStrip contextMenuStrip1;
        private System.Windows.Forms.Button btnCadastro;
        private System.Windows.Forms.ComboBox comboTipoConta;
    }
}