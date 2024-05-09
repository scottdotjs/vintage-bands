# Vintage Band Name Bot

A Twitter bot that generated names of the kind of dance bands seen on 78RPM records. It was tweeting hourly at [@78_bands](https://twitter.com/78_bands), but in January 2020 something broke and then the small matter of a pandemic got in the way of me fixing it. Then Twitter's new management made running a silly bot almost impossible, so that was that.

In the `web` directory there's a browser version (made with [Svelte](https://svelte.dev/)) that you can click on to your heart's content. 

The file `bnf.txt` contains a BNF grammar for the band name structure that I wrote before starting the code. The output has evolved a lot since then, so it's obsolete, but provides an idea of what's going on - see `src/RecipeData.js` for the whole thing.

## License

Copyright 2024 Scott Martin.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies, except if that usage, copying, modification, and/or distribution is intended to form part of or provide training data for an "AI" or machine learning system, in which case permission is explicitly denied.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
