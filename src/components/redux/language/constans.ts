export enum Languages {
    PL = "pl",
    EN = "en",
  UA="ua",
}

export const langDictionary = {
    //Header
    navWkm: {
        [Languages.EN]: "Wkm",
        [Languages.PL]: "Wkm",
        [Languages.UA]: "Wkm",
    },
    //Nav
    navPhonebook: {
        [Languages.EN]: "Phonebook",
        [Languages.PL]: "Phonebook",
    },
    navHome: {
        [Languages.EN]: "Home",
        [Languages.PL]: "Start",
        [Languages.UA]: "Cтарт",
    },
    navPenalties: {
        [Languages.EN]: "Penalties",
        [Languages.PL]: "Kary",
        [Languages.UA]: "Штрафи",
    },

    // HomePage
    homePageFirstText: {
        [Languages.EN]: "Check when you need to register your car or report its sale.",
        [Languages.PL]: "Sprawdź, kiedy musisz zarejestrować samochód lub zgłosić jego zbycie.",
        [Languages.UA]: "Перевірте, коли потрібно реєструвати автомобіль або повідомляти про його продаж.",
    },
    homePageSecondText: {
        [Languages.EN]: "Don't miss statutory deadlines and avoid penalties!",
        [Languages.PL]: "Nie przekrocz ustawowych terminów i uniknij kar!",
        [Languages.UA]: "Не перевищуйте встановлені законом терміни та уникайте штрафів!",
    },
     homePageThirdText: {
        [Languages.EN]: "Register or report the sale of your car on time.",
        [Languages.PL]: "Zarejestruj lub zgłoś zbycie samochodu na czas.",
        [Languages.UA]: "Вчасно зареєструйте або повідомте про продаж автомобіля.",
    },
     homePageFourthTextFirstPart: {
        [Languages.EN]: "Check the date",
        [Languages.PL]: "Sprawdź termin",
        [Languages.UA]: "Перевірте дату",
    },
    homePageFourthTextSecondPart: {
        [Languages.EN]: "now!",
        [Languages.PL]: "teraz!",
        [Languages.UA]: "зараз!",
    },

// FormPenalties
    formPenaltiesStartDate: {
        [Languages.EN]: "Select the date of the contract, the date of importing the vehicle to Poland:",
        [Languages.PL]: "Wybierz datę sporządzenia umowy, datę sprowadzenia pojazdu do Polski:",
        [Languages.UA]: "Виберіть дату складання договору та дату привезення автомобіля до Польщі:",
    },
    formPenaltiesSoldVehicle: {
        [Languages.EN]: "I sold the vehicle:",
        [Languages.PL]: "Sprzedałem pojazd:",
        [Languages.UA]: "Я продав автомобіль:",
    },
   formPenaltiesBuyVehicle: {
        [Languages.EN]: "I bought/imported a vehicle:",
        [Languages.PL]: "Kupiłem/sprowadziłem pojazd:",
        [Languages.UA]: "Я купив/імпортував автомобіль:",
    },
    formPenaltiesNaturalPerson: {
        [Languages.EN]: "I am a natural person:",
        [Languages.PL]: "Jestem osobą fizyczną:",
        [Languages.UA]: "Я фізична особа:",
    },
    formPenaltiesLegalPerson: {
        [Languages.EN]: "I am an entrepreneur trading in vehicles:",
        [Languages.PL]: "Jestem przedsiębiorcą prowadzącym obrót pojazdami:",
        [Languages.UA]: "Я підприємець, займаюся транспортними засобами:",
    },
    formPenaltiesDetailedData: {
        [Languages.EN]: "Show detailed data:",
        [Languages.PL]: "Pokaż szczegółowe dane:",
        [Languages.UA]: "Показати докладні дані:",
    },
    formPenaltiesButtonShow: {
        [Languages.EN]: "Show",
        [Languages.PL]: "Pokaż",
        [Languages.UA]: "Показати",
    },
    
    // DateTimePicker
    dateTimePickerButtonToday: {
        [Languages.EN]: "Today",
        [Languages.PL]: "Dzisiaj",
        [Languages.UA]: "Сьогодні",
    },
    
    passwordField: {
        [Languages.EN]: "Password",
        [Languages.PL]: "Hasło",
    },
    confirmPasswordField: {
        [Languages.EN]: "Confirm password",
        [Languages.PL]: "Potwierdź hasło",
    },
    privacyPolicy: {
        [Languages.EN]: "Accepting ridiculously long terms and conditions that no one reads anyway, called Privacy Policies.",
        [Languages.PL]: "Akceptowanie absurdalnie długich warunków, których i tak nikt nie czyta, zwanych Polityką Prywatności.",
    },
    signUpButton: {
        [Languages.EN]: "Sign up",
        [Languages.PL]: "Zarejestruj się",
    },
    alreadyHaveAnAccountText: {
        [Languages.EN]: "Already have an account?",
        [Languages.PL]: "Masz już konto?",
    },
    loginNowText: {
        [Languages.EN]: "Login now",
        [Languages.PL]: "Zaloguj się teraz",
    },
    // RegisterForm errors
    errorConnection400: {
        [Languages.EN]: "Request failed with status code 400. It is possible that the email address has already been used.",
        [Languages.PL]: "Żądanie nie powiodło się, kod statusu 400. Prawdopodobnie adres e-mail został już użyty.",
    },

    // LoginForm
    loginFormTitle: {
        [Languages.EN]: "Login form",
        [Languages.PL]: "Formularz logowania",
    },
    signInButton: {
        [Languages.EN]: "Sign in",
        [Languages.PL]: "Zaloguj się",
    },
    dontHaveAnAccountText: {
        [Languages.EN]: "Don't have an account yet?",
        [Languages.PL]: "Nie masz jeszcze konta?",
    },
    registerNowText: {
        [Languages.EN]: "Register now",
        [Languages.PL]: "Zarejestruj się teraz",
    },
    // LoginForm errors
    loginFormErrorConnection400: {
        [Languages.EN]: "Request failed with status code 400. Email address or password is invalid.",
        [Languages.PL]: "Żądanie nie powiodło się, kod statusu 400. Adres e-mail lub hasło są nieprawidłowe.",
    },

    // Filter Contacts
    findContact: {
        [Languages.EN]: "Search contact",
        [Languages.PL]: "Wyszukaj kontakt"
    },

    //ContactForm
    errorPhoneNumberRegex: {
        [Languages.EN]: `The sign "{value}" is not allowed. Only numbers can be entered.`,
        [Languages.PL]: `Znak "{value}"nie jest dozwolony. Można wpisywać tylko cyfry.`
    },
    errorRepeatedContact: {
        [Languages.EN]: "{name} or {number} is already in contacts",
        [Languages.PL]: "{name} lub {number} już istnieje w kontaktach"
    },
    newName: {
        [Languages.EN]: "New name",
        [Languages.PL]: "Nowa nazwa"
    },
    newNumber: {
        [Languages.EN]: "New number",
        [Languages.PL]: "Nowy numer"
    },
    // ContactForm addContact
    tableButtonAddContact: {
        [Languages.EN]: "Add",
        [Languages.PL]: "Dodaj"
    },
    //Table
    tableId: {
        [Languages.EN]: "Id",
        [Languages.PL]: "Lp",
    },
    tableName: {
        [Languages.EN]: "Name",
        [Languages.PL]: "Nazwa"
    },
    tableNumber: {
        [Languages.EN]: "Number",
        [Languages.PL]: "Numer"
    },
    tableAction: {
        [Languages.EN]: "Actions",
        [Languages.PL]: "Akcje"
    },
    tableButtonSave: {
        [Languages.EN]: "Save",
        [Languages.PL]: "Zapisz"
    },
    tableButtonCancel: {
        [Languages.EN]: "Cancel",
        [Languages.PL]: "Anuluj"
    },
    tableButtonEdit: {
        [Languages.EN]: "Edit",
        [Languages.PL]: "Edytuj"
    },
    tableButtonDelete: {
        [Languages.EN]: "Delete",
        [Languages.PL]: "Usuń"
    },

    // Footer
    footerLibraries: {
        [Languages.EN]: "Libraries",
        [Languages.PL]: "Biblioteki"
    },

    // Modal Libraries
    modalLibraries: {
        [Languages.EN]: "Used libraries:",
        [Languages.PL]: "Użyte biblioteki:"
    },
    //HomePage
    homePageSecondPhrase: {
        [Languages.EN]: "Tired of the mess?<br /> Store your contacts securely in the Phonebook.",
        [Languages.PL]: "Masz dość bałaganu?<br /> Przechowuj swoje kontakty bezpiecznie w Phonebook'u."
    },
    
    homePageFirstPhrase: {
        [Languages.EN]: "Trade paper notes for digital ease.<br /> The Phonebook keeps things organized on any device!",
        [Languages.PL]: "Zamień papierowe notatki na cyfrową wygodę.<br /> Phonebook to porządek na każdym urządzeniu!"
    },
    

}