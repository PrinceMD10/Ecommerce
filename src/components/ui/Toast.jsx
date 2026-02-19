function Toast({ notif, dismiss }) {
  if(!notif) return null;
  const icon = {success:"✓",error:"✕",info:"ℹ"}[notif.type]??"ℹ";
  return (
    <div key={notif.id} className={`toast ${notif.type}`} role="status">
      <span className="t-ic">{icon}</span>
      <span>{notif.msg}</span>
      <button className="t-x" onClick={dismiss}>×</button>
    </div>
  );
}