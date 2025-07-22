

type TCategory = "Work" | "Personal" | "Other"

const work = ["meeting", "project", "client", "deadline", "presentation"]
const personal = ["birthday", "family", "dinner", "vacation", "anniversary"]

export const Categorize = (text:string) : TCategory  => {

    const lower = text.toLowerCase();
    for(const x of work) {
        if(lower.includes(x)) return "Work"
    }
    for(const x of personal) {
        if(lower.includes(x)) return "Personal"
    }

    return "Other";

}