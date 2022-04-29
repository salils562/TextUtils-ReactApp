import React from 'react';
export default function Alert(props) {
  let successUpper=(word)=>{
    let s=word.charAt(0).toUpperCase();
    let newWord=s+word.slice(1);
    return newWord;
    }
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{successUpper(props.alert.type)}</strong>: {props.alert.msg}
   </div>
  )
}