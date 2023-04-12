$(document).ready(() => {
    fetch("https://api.github.com/users/andrefmsouza/repos")
        .then( r => r.json() )
        .then( repos => {
            console.log(repos);
            repos.sort((a,b) => b.stargazers_count - a.stargazers_count );
            repos.map( repo => {
                $("#projects").append(`
                <div class="col-6">
                    <a class="box" href='${repo.html_url}' target='_blank'>
                        <div class='repo-name'>
                            <svg class='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            ${repo.name}
                        </div>

                        <div class='repo-description' >
                            ${repo.description || ''}
                        </div>

                        <div class='repo-info' >
                            <svg class='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <span> ${repo.stargazers_count} </span>


                            <span class='ml-auto'> ${repo.language || ''} </span>
                        </div>
                    </a>
                </div>
                `);
            });
        });
});