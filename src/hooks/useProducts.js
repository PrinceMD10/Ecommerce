function useProducts() {
  const [query,setQuery]       = useState("");
  const [category,setCategory] = useState("Tous");
  const [sortBy,setSortBy]     = useState("default");
  const filtered = useMemo(() => {
    let r = [...PRODUCTS];
    if(category!=="Tous") r = r.filter(p=>p.category===category);
    if(query.trim()) { const q=query.toLowerCase(); r=r.filter(p=>p.name.toLowerCase().includes(q)||p.description.toLowerCase().includes(q)); }
    if(sortBy==="price-asc")  r.sort((a,b)=>a.price-b.price);
    if(sortBy==="price-desc") r.sort((a,b)=>b.price-a.price);
    if(sortBy==="name-asc")   r.sort((a,b)=>a.name.localeCompare(b.name));
    if(sortBy==="name-desc")  r.sort((a,b)=>b.name.localeCompare(a.name));
    return r;
  },[query,category,sortBy]);
  return {filtered, query,setQuery, category,setCategory, sortBy,setSortBy, reset:()=>{setQuery("");setCategory("Tous");setSortBy("default");}};
}
function useNotification(dur=2800) {
  const [notif,setNotif] = useState(null);
  const t = useRef(null);
  const notify  = useCallback((msg,type="info")=>{ clearTimeout(t.current); setNotif({msg,type,id:Date.now()}); t.current=setTimeout(()=>setNotif(null),dur); },[dur]);
  const dismiss = useCallback(()=>{ clearTimeout(t.current); setNotif(null); },[]);
  return {notif, notify, dismiss};
}
function useClickOutside(ref,fn) {
  useEffect(()=>{
    const h=e=>{ if(!ref.current||ref.current.contains(e.target)) return; fn(e); };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[ref,fn]);
}