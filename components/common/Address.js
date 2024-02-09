import { MdPhoneInTalk, MdEmail, MdLocationPin } from 'react-icons/md';

const Address = () => {
  const contactData = [
    {
      contact: '+8801743136127',
      link: 'https://api.whatsapp.com/send?phone=+8801743136127',
      icon: <MdPhoneInTalk />,
    },
    {
      contact: 'rana@shannonit.org',
      link: 'mailto:rana@shannonit.org',
      icon: <MdEmail />,
    },
    {
      contact: '41/14-A Afsar Uddin Lane,1209, Zigatola - Dhaka',
      icon: <MdLocationPin />,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-7 lg:gap-10 mt-7 lg:mt-10 text-custom-gray3">
        {contactData.map((data, i) => (
          <div key={i}>
            <div className="flex items-center gap-5">
              <span className="text-4xl text-custom-orange">{data.icon}</span>
              {data.link ? (
                <a href={data.link} target="_blank" rel="noreferrer">
                  {data.contact}
                </a>
              ) : (
                <p>{data.contact}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
