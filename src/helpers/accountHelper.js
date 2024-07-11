import { accounts } from "co-mission/data/accountsdata";

export function getAccountIds() {
    return accounts.map((account) => {
        return {
            params: {
                id: account.id,
            },
        };
    });
}

export function getAccountData(id) {
    return accounts.find((account) => account.id == id);
}
