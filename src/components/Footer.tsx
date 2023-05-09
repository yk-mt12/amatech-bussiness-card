type Props = {
  githubLink?: string;
  twitterLink?: string;
  instagramLink?: string;
};

export const Footer = ({ githubLink, twitterLink, instagramLink }: Props) => {
  return (
    <>
      <footer className="section_footer">
        <ul className="footer_social">
          {githubLink && (
            <li>
              <a href="https://github.com/yk-" target="_" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.68952 17.9516C8.68952 18.0323 8.59677 18.0968 8.47984 18.0968C8.34677 18.1089 8.25403 18.0444 8.25403 17.9516C8.25403 17.871 8.34677 17.8065 8.46371 17.8065C8.58468 17.7944 8.68952 17.8589 8.68952 17.9516ZM7.43548 17.7702C7.40726 17.8508 7.4879 17.9435 7.60887 17.9677C7.71371 18.0081 7.83468 17.9677 7.85887 17.8871C7.88306 17.8065 7.80645 17.7137 7.68548 17.6774C7.58065 17.6492 7.46371 17.6895 7.43548 17.7702ZM9.21774 17.7016C9.10081 17.7298 9.02016 17.8065 9.03226 17.8992C9.04435 17.9798 9.14919 18.0323 9.27016 18.004C9.3871 17.9758 9.46774 17.8992 9.45564 17.8185C9.44355 17.7419 9.33468 17.6895 9.21774 17.7016ZM11.871 2.25C6.27823 2.25 2 6.49597 2 12.0887C2 16.5605 4.81452 20.3871 8.83468 21.7339C9.35081 21.8266 9.53226 21.5081 9.53226 21.246C9.53226 20.996 9.52016 19.6169 9.52016 18.7702C9.52016 18.7702 6.69758 19.375 6.10484 17.5685C6.10484 17.5685 5.64516 16.3952 4.98387 16.0927C4.98387 16.0927 4.06048 15.4597 5.04839 15.4718C5.04839 15.4718 6.05242 15.5524 6.60484 16.5121C7.4879 18.0686 8.96774 17.621 9.54435 17.3548C9.6371 16.7097 9.89919 16.2621 10.1895 15.996C7.93548 15.746 5.66129 15.4194 5.66129 11.5403C5.66129 10.4315 5.96774 9.875 6.6129 9.16532C6.50806 8.90323 6.16532 7.82258 6.71774 6.42742C7.56048 6.16532 9.5 7.51613 9.5 7.51613C10.3065 7.29032 11.1734 7.17339 12.0323 7.17339C12.8911 7.17339 13.7581 7.29032 14.5645 7.51613C14.5645 7.51613 16.504 6.16129 17.3468 6.42742C17.8992 7.82661 17.5565 8.90323 17.4516 9.16532C18.0968 9.87903 18.4919 10.4355 18.4919 11.5403C18.4919 15.4315 16.1169 15.7419 13.8629 15.996C14.2339 16.3145 14.5484 16.9194 14.5484 17.8669C14.5484 19.2258 14.5363 20.9073 14.5363 21.2379C14.5363 21.5 14.7218 21.8186 15.2339 21.7258C19.2661 20.3871 22 16.5605 22 12.0887C22 6.49597 17.4637 2.25 11.871 2.25ZM5.91935 16.1573C5.86694 16.1976 5.87903 16.2903 5.94758 16.3669C6.0121 16.4315 6.10484 16.4597 6.15726 16.4073C6.20968 16.3669 6.19758 16.2742 6.12903 16.1976C6.06452 16.1331 5.97177 16.1048 5.91935 16.1573ZM5.48387 15.8306C5.45565 15.8831 5.49597 15.9476 5.57661 15.9879C5.64113 16.0282 5.72177 16.0161 5.75 15.9597C5.77823 15.9073 5.7379 15.8427 5.65726 15.8024C5.57661 15.7782 5.5121 15.7903 5.48387 15.8306ZM6.79032 17.2661C6.72581 17.3185 6.75 17.4395 6.84274 17.5161C6.93548 17.6089 7.05242 17.621 7.10484 17.5565C7.15726 17.504 7.13306 17.3831 7.05242 17.3065C6.96371 17.2137 6.84274 17.2016 6.79032 17.2661ZM6.33065 16.6734C6.26613 16.7137 6.26613 16.8185 6.33065 16.9113C6.39516 17.004 6.50403 17.0444 6.55645 17.004C6.62097 16.9516 6.62097 16.8468 6.55645 16.754C6.5 16.6613 6.39516 16.621 6.33065 16.6734Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          )}
          {twitterLink && (
          <li>
            <a href="https://twitter.com/terieyenike" target="_" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.9442 7.92639C19.9569 8.10405 19.9569 8.28175 19.9569 8.4594C19.9569 13.8782 15.8326 20.1219 8.29444 20.1219C5.97209 20.1219 3.81473 19.4493 2 18.2818C2.32996 18.3198 2.64719 18.3325 2.98985 18.3325C4.90607 18.3325 6.67006 17.6853 8.0787 16.5813C6.27666 16.5432 4.7665 15.363 4.24618 13.7386C4.50001 13.7766 4.7538 13.802 5.02032 13.802C5.38833 13.802 5.75638 13.7513 6.099 13.6625C4.22083 13.2817 2.81215 11.632 2.81215 9.6396V9.58886C3.35782 9.89343 3.99239 10.0838 4.66493 10.1091C3.56087 9.37308 2.83754 8.11675 2.83754 6.69541C2.83754 5.934 3.04055 5.23603 3.3959 4.62689C5.41369 7.1142 8.4467 8.73854 11.8477 8.91624C11.7843 8.61167 11.7462 8.29444 11.7462 7.97717C11.7462 5.71826 13.5736 3.87817 15.8452 3.87817C17.0254 3.87817 18.0914 4.3731 18.8401 5.17259C19.7665 4.99494 20.6548 4.65228 21.4416 4.18275C21.137 5.13455 20.4898 5.93404 19.6396 6.44162C20.4645 6.35283 21.264 6.12435 22 5.80713C21.4417 6.61928 20.7437 7.3426 19.9442 7.92639Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
          )}
          {instagramLink && (
          <li>
            <a href="https://instagram.com/terieyenike" target="_" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.0022 6.87336C9.16453 6.87336 6.87563 9.16226 6.87563 12C6.87563 14.8377 9.16453 17.1266 12.0022 17.1266C14.8399 17.1266 17.1288 14.8377 17.1288 12C17.1288 9.16226 14.8399 6.87336 12.0022 6.87336ZM12.0022 15.3329C10.1684 15.3329 8.66927 13.8382 8.66927 12C8.66927 10.1617 10.164 8.66701 12.0022 8.66701C13.8405 8.66701 15.3352 10.1617 15.3352 12C15.3352 13.8382 13.836 15.3329 12.0022 15.3329ZM18.5343 6.66366C18.5343 7.32847 17.9989 7.85942 17.3385 7.85942C16.6737 7.85942 16.1428 7.324 16.1428 6.66366C16.1428 6.00331 16.6782 5.4679 17.3385 5.4679C17.9989 5.4679 18.5343 6.00331 18.5343 6.66366ZM21.9297 7.87727C21.8539 6.27548 21.488 4.85663 20.3146 3.68764C19.1456 2.51865 17.7267 2.15278 16.1249 2.07247C14.4741 1.97877 9.52593 1.97877 7.87507 2.07247C6.27775 2.14832 4.8589 2.51419 3.68544 3.68318C2.51199 4.85217 2.15059 6.27102 2.07027 7.87281C1.97658 9.52367 1.97658 14.4718 2.07027 16.1227C2.14612 17.7245 2.51199 19.1433 3.68544 20.3123C4.8589 21.4813 6.27328 21.8472 7.87507 21.9275C9.52593 22.0212 14.4741 22.0212 16.1249 21.9275C17.7267 21.8516 19.1456 21.4857 20.3146 20.3123C21.4835 19.1433 21.8494 17.7245 21.9297 16.1227C22.0234 14.4718 22.0234 9.52813 21.9297 7.87727ZM19.797 17.894C19.449 18.7685 18.7752 19.4422 17.8963 19.7947C16.58 20.3168 13.4568 20.1963 12.0022 20.1963C10.5477 20.1963 7.41997 20.3123 6.1082 19.7947C5.23369 19.4467 4.55996 18.773 4.20747 17.894C3.68544 16.5778 3.80591 13.4545 3.80591 12C3.80591 10.5454 3.68991 7.4177 4.20747 6.10593C4.55549 5.23142 5.22922 4.55769 6.1082 4.20521C7.42443 3.68318 10.5477 3.80365 12.0022 3.80365C13.4568 3.80365 16.5845 3.68764 17.8963 4.20521C18.7708 4.55323 19.4445 5.22696 19.797 6.10593C20.319 7.42216 20.1985 10.5454 20.1985 12C20.1985 13.4545 20.319 16.5822 19.797 17.894Z"
                  fill="black"
                />
              </svg>
            </a>
          </li>
          )}
        </ul>
      </footer>
    </>
  );
};
