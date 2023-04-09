import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: '05c4f35ac453ba81ecd39d68f4121e7f-us13',
  server: 'us13',
});

export async function subscribe(email) {
  const response = await mailchimp.lists.addListMember('9aecd871d8', {
    email_address: email,
    status: 'subscribed',
  });
  console.log(response)
  return response;
}