export const hogehoge = {
    data() {
        return {
            title: "Hello World!",
            subtitle: "hogehoge"
        }
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase()
        },
    },
    created() {
        console.log('mixin!')
    }
}