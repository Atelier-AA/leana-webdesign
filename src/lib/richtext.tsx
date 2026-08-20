import { Fragment, type ReactNode } from "react";

/**
 * Tiny inline richtext for config-authored copy: **bold** for emphasis and
 * "\n" for a line break within the same paragraph. Deliberately not a full
 * markdown renderer — just enough for the story/experiment copy to carry
 * emphasis without needing HTML in the config file.
 */
export function renderRichText(text: string): ReactNode {
  return text.split("\n").map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(/(\*\*[^*]+\*\*)/g).map((chunk, chunkIndex) =>
        chunk.startsWith("**") && chunk.endsWith("**") ? (
          <strong key={chunkIndex} className="font-semibold text-foreground">
            {chunk.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={chunkIndex}>{chunk}</Fragment>
        )
      )}
    </Fragment>
  ));
}
