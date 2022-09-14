import {instance} from './instance'

export async function getAllFlags(){
    try {
        const results = await instance.get('all') 
        return results
    } catch (error) {
        
    }
}
export async function filterName(name){
    try {
        const results = await instance.get(`name/${name}`) 
        return results
    } catch (error) {
        
    }
}
export async function filterRegion(region){
    try {
        const results = await instance.get(`region/${region}`) 
        return results
    } catch (error) {
        
    }
}