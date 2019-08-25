export const parseStringDate = (date: string): Date => {
    const splittedDate = date.split("/");
    return new Date(
        parseInt(splittedDate[0], 10),
        parseInt(splittedDate[1], 10) - 1,
        parseInt(splittedDate[2], 10)
    );
};
