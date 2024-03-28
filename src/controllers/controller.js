import ServicoExercicio from "../services/service.js";
const resultado = 0;
const servico = new ServicoExercicio();

export default class ControllerExercicio {
  Somar(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
        throw new Error(
          "Não é possível realizar essa operação. Favor informar todos os números."
        );
      }

      if (isNaN(num1) || isNaN(num2)) {
        throw new Error(
          "Não é possivel realizar essa operação. Favor informar somente números."
        );
      }

      const result = servico.Somar(num1, num2);

      res.status(200).json({ resultado: result });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ erro: error.message });
    }
  }

  Subtrair(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
        throw new Error(
          "Não é possível realizar essa operação. Favor informar todos os números."
        );
      }

      if (isNaN(num1) || isNaN(num2)) {
        throw new Error(
          "Não é possivel realizar essa operação. Favor informar somente números."
        );
      }

      const result = servico.Subtrair(num1, num2);

      res.status(200).json({ resultado: result });
    } catch (error) {
      res.status(500).json({ message: "Erro ao Subtrair" });
    }
  }

  Dividir(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
        throw new Error(
          "Não é possível realizar essa operação. Favor informar todos os números."
        );
      }

      if (isNaN(num1) || isNaN(num2)) {
        throw new Error(
          "Não é possivel realizar essa operação. Favor informar somente números."
        );
      }

      const result = servico.Dividir(num1, num2);

      res.status(200).json({ resultado: result });
    } catch (error) {
      res.status(500).json({ message: "Erro ao Dividir" });
    }
  }

  Multiplicar(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
        throw new Error(
          "Não é possível realizar essa operação. Favor informar todos os números."
        );
      }

      if (isNaN(num1) || isNaN(num2)) {
        throw new Error(
          "Não é possivel realizar essa operação. Favor informar somente números."
        );
      }

      const result = servico.Multiplicar(num1, num2);
      res.status(200).json({ resultado: result });
    } catch (error) {
      res.status(500).json({ message: "Erro ao Multiplicar" });
    }
  }
}
