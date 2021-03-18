// export default class Input extends React.Component
// {

//     render()
//     {
//       const { name, onChange } = this.props;
//       return(<div className="row">
//                 <div className="input-field col s12">
//                   <input id={name}
//                          type="text"
//                          className="validate flow-text"
//                          onChange={ this.props.onChange } />
//                   <label htmlFor={name}>Name of Recipe</label>
//                 </div>
//          </div>)
//     }

// }
const Input = (props) => {
  console.log("eee", props);
  return (
    <div className="form-group">
      <input id= {props.key}
        type="text"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Title"
        // value={flipbook}
        // onChange={props.onChange}
      />
    </div>
  );
};
export default Input;
