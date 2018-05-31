class Github {
  constructor() {
    this.client_id = 'f7c0dab3aeb933285973';
    this.client_secret = 'a4d1eea3b7844faf8bda70021a4ad9d5ec82d384';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return { 
      profile,
      repos
    };
  }
}