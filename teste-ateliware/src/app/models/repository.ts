import { Owner } from './owner';

export class Repository {
    id: number;
    gitHubId: number;
    gitUrl: string;
    htmlUrl: string;
    name: string;
    creationDate: Date;
    updateDate: Date;
    language: string;
    forksCount: string;
    ownerId: number;
    owner: Owner;
}