export function loadScript(
    src = 'https://www.google.com/recaptcha/api.js?onload=onloadRecaptcha&render=explicit',
    id = 'box_script'
) {
    return new Promise(async(resolve, reject) => {
        let box = document.getElementById(id);

        if (box) {
            let newScript = document.createElement('script');
            newScript.src = src;

            newScript.addEventListener('load', e => {
                return resolve(e);
            });

            newScript.addEventListener('error', e => {
                return reject(e);
            });
            box.appendChild(newScript);
        }
    });
}