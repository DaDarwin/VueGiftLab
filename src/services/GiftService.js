import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { api } from "./AxiosService"

class GiftService{

    async getGifts(){
        const response = await api.get('api/gifts')
        // console.log(response)
        AppState.gifts = response.data.map( gift => new Gift(gift))
    }

    async openGift(giftId){
        let index = AppState.gifts.findIndex(gift => gift.id == giftId)
        AppState.gifts[index].opened = true
        const response = await api.put(`api/gifts/${giftId}`, AppState.gifts[index])
        AppState.gifts[index] = new Gift(response.data)
    }
}


export const giftService = new GiftService()