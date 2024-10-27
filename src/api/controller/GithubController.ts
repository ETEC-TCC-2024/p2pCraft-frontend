import axios from "axios";

//https://github.com/P2PCraft-bot/server-hardcuore-do-timbao.git
class GithubController {
  async getServerSizeInMegabytes(mapUrl: string) {
    const url = mapUrl.replace("https://github.com/P2PCraft-bot/", "").replace(".git", "");
    const response = await axios.get(`https://api.github.com/repos/P2PCraft-bot/${url}`, {
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    });
    const size: string = response.data.size + "";
    return size.substring(0, 3);
  }
}

export default new GithubController();
