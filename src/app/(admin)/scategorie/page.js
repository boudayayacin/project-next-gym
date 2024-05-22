import ListScat from "@/components/admin/listscategories";
import {fetchArticles, fetchSCategories} from "@/services/ScategorieService"
const getScatgorie = async()=>{
    const data = await fetchSCategories()
    return data ;
}
const ScategoriePage = async()=>{
    const scategories = await getScatgorie()
    return (
        <div className="container">
        <ListScat scategories={scategories}/>
        </div>
        )
}