export class Util {

    random_email() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result = ''
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result + '@gmail.com';
    }

    getRandomBrand(brands) {
        const randomIndex = Math.floor(Math.random() * brands.length)
        return brands[randomIndex]
    }
    //excluye marca anterior
    getRandomBrandExcluding(brands, excludedBrand) {
      const filteredBrands = brands.filter(brand => brand !== excludedBrand)
      return util.getRandomBrand(filteredBrands)
    }
}
export const util = new Util()