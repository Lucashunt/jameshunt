import mailchimp from '@mailchimp/mailchimp_marketing';

export default async function handler(req, res) {
  const {email} = req.body

  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAILCHIMP_DC,
  });

  try {
     await mailchimp.lists.addListMember(process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
    });
 
    
    
  } catch (err) {
    return res.status(400).send({ error: true })
  }

  return res.json({ success: true });
}