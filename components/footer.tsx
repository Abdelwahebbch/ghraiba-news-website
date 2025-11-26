export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Ghaiba News</h3>
            <p className="text-sm text-muted-foreground">منصة إخبارية متخصصة في أخبار حكومة غيبة والمعلومات الزراعية</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">الأقسام</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  أخبار
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  أسعار
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  صور
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">معلومات</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  عن الموقع
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  شروط الاستخدام
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">تابعنا</h4>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 Ghaiba News. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
