function Toast({ notification, onDismiss }) {
  if (!notification) return null;
  const colors = { success:"#3D7A5E", error:"#B94040", info:"#C9A96E" };
  const icons  = { success:"✓", error:"✕", info:"ℹ" };
  return (
    <div key={notification.id} role="status" style={{
      position:"fixed", bottom:32, left:"50%", transform:"translateX(-50%)",
      zIndex:300, display:"flex", alignItems:"center", gap:12,
      padding:"14px 24px", background:"#141414", color:"#F8F4EE",
      fontSize:13, boxShadow:"0 16px 48px rgba(0,0,0,.3)",
      borderLeft:`3px solid ${colors[notification.type]??"#C9A96E"}`,
      whiteSpace:"nowrap", fontFamily:"'DM Sans','Helvetica Neue',sans-serif",
      animation:"slideUp .28s cubic-bezier(.34,1.56,.64,1)",
    }}>
      <span style={{ fontWeight:700, color:colors[notification.type] }}>{icons[notification.type]}</span>
      <span>{notification.message}</span>
      <button onClick={onDismiss} style={{ color:"#555", fontSize:18, background:"none", border:"none", cursor:"pointer", marginLeft:8 }}>×</button>
    </div>
  );
}

export default Toast;