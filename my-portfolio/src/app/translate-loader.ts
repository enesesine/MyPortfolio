import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Diese Funktion erstellt einen TranslateHttpLoader, der die JSON‑Dateien aus dem Ordner "assets/i18n" lädt.
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
