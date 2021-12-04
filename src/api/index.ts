import { Appwrite } from "appwrite"
import Server from "../util/Server";

export default class API {
    public static provider: Appwrite|null = null;

    public static getInstance() {
        if (this.provider != null) return this.provider;
        this.provider = new Appwrite();
        this.provider.setEndpoint(Server.endpoint).setProject(Server.projectId);
        return this.provider;
    }
}