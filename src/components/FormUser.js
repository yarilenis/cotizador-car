import React, { Component } from 'react';
import { Input, InputGroup } from 'reactstrap';

class FormUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      success: false,
      form: {
        documentType: 'DNI',
        document: '',
        phone: '',
        plate: '',
        terms: false,
      },
    };
  }

  handleInput(e, keyForm = 'form') {
    const { id, value } = e.target;
    const form = this.state[keyForm];
    const clon = { ...form };
    clon[id] = value;
    this.setState({ [keyForm]: clon });
  }

  async saveData(e) {
    e.preventDefault();
    const { form } = this.state;
    this.setState({ loading: true });
  }

  render() {
    const {
      error,
      success,
      loading,
      form,
    } = this.state;
    return (
      <div className="my-md-5 p-3 p-md-5">
        <form onSubmit={(e) => this.saveData(e)} className={`${success && 'd-none'}`}>
          <div className="mb-3">
            <h2>Déjanos tus datos</h2>
          </div>
          <div>
            <div className="mb-3">
              <InputGroup>
                <Input
                  value={form.documentType}
                  onChange={(e) => this.handleInput(e)}
                  id="documentType"
                  type="select"
                  bsSize="lg"
                  required
                >
                  <option value="DNI">DNI</option>
                  <option value="CE">CE</option>
                  <option value="PASS">PASS</option>
                </Input>
                <Input
                  value={form.document}
                  onChange={(e) => this.handleInput(e)}
                  id="document"
                  type="tel"
                  className="w-50"
                  bsSize="lg"
                  placeholder="Nro. de doc"
                  required
                />
              </InputGroup>
            </div>
            <div className="mb-3">
              <Input
                value={form.phone}
                onChange={(e) => this.handleInput(e)}
                id="phone"
                type="tel"
                placeholder="Celular"
                minLength="9"
                bsSize="lg"
                required
              />
            </div>
            <div className="mb-3">
              <Input
                value={form.plate}
                onChange={(e) => this.handleInput(e)}
                id="plate"
                type="text"
                placeholder="Placa"
                bsSize="lg"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="terms" className="form-group form-check">
                <input
                  checked={form.terms}
                  onChange={(e) => this.handleInput(e)}
                  id="terms"
                  className="form-check-input"
                  type="checkbox"
                  required
                />
                <span className="form-check-label">
                  Acepto la 
                  <a href="#" target="_blank">
                    <span> Política de Protección de Datos Personales </span>
                  </a>
                  y los
                  <a href="#" target="_blank">
                    <span> Términos y Condiciones.</span>
                  </a>
                </span>
              </label>
            </div>
            {error && <div className="mb-3 text-danger">{error}</div>}
          </div>
          <div className="text-center py-3">
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-round"
              disabled={loading || !form.terms}
            >
              {!loading ? 'COTÍZALO' : <i className="fa fa-spin fa-spinner" />}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormUser;
