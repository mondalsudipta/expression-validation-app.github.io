ইউজার একটা মেনু দেখবে যেখানে দেয়া থাকবে কোন ধরনের এক্সপ্রেশন সে ভ্যালিডেট করতে চায় – Email, Phone Number, Post Code, etc. চাইলে আরো অপশন এড করতে পারেন
ইউজার অপশন টা সিলেক্ট করার একটা ইনপুট ফিল্ড দেখাবে (prompt ফাংশন), যেটা ইনপুট দিবে, সেটা ওই অপশনের regular expression এর সাথে ম্যাচ করবে যেমন Post Code এর জন্যে /^\d{4}$/ এর সাথে ম্যাচ করবে। 
Regular expression গুলো চাইলে আপনি নিজে বানাতে পারেন অথবা  internet থেকে কপি করতে পারেন।
আপনি চাইলে ফর্ম ইউজ করেও ইউজার ইনপুট নেয়ার কাজটি করতে পারেন।
একটা switch কন্ডিশন লিখে regular expression গুলো সুইচ করতে পারেন
regular expression দিয়ে চেক করার পর সেটি valid হল না invalid সেটা দেখাবে।  
আপনি regular expression ইউজ করেছেন কিনা টা যাচাই করার জন্যে সাবমিশন এ আপনার কোড দিন (drive অথবা github এর লিঙ্ক) ।  
নিচের টেবিলের ক্রাইটেরিয়া অনুযায়ী আমরা এসাইনমেন্টটি দেখবো এবং ফীডব্যাক দিবোঃ
 

Criteria: Specifications
Error: The code is error free
Multiple Fields: At least 3 input fields to validate
Regular Expressions: Input fields should be validated by regular expression. 