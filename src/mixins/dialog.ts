import {DialogProgrammatic as Dialog} from 'buefy'


const dialogMixin = {
    methods: {
        openDialogSuccess(message: string) {
            Dialog.alert({
                title: "Success!",
                message: message,
                confirmText: "OK",
                hasIcon: true,
                icon: "check"
            })
        },
        openDialogError(message: string) {
            Dialog.alert({
                title: "Error!",
                message: message,
                type: 'is-danger',
                hasIcon: true,
                icon: "view-dashboard",
                confirmText: "OK",
            })
        }
    }
}

export default dialogMixin