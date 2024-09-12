/*!
 * Copyright (c) 2021-2024 Digital Bazaar, Inc. All rights reserved.
 */
import v1Context from './v1.js';
import v2Context from './v2.js';
import v3Context from './v3.js';

// map of context id to context
export const contexts = new Map();
// map of context id to context metadata
export const metadata = new Map();
// map of short names to context metadata
export const named = new Map();

function setExportsFromMetadata({
  contextsMap, metadataMap, namedMap, metadata
}) {
  contextsMap.set(metadata.id, metadata.context);
  metadataMap.set(metadata.id, metadata);
  namedMap.set(metadata.shortName, metadata);
}

setExportsFromMetadata({
  contextsMap: contexts, metadataMap: metadata, namedMap: named,
  metadata: {
    id: 'https://w3id.org/citizenship/v1',
    type: 'ContextMetadata',
    shortName: 'v1',
    fileUrl: new URL('../contexts/v1.jsonld', import.meta.url),
    context: v1Context
  }
});
setExportsFromMetadata({
  contextsMap: contexts, metadataMap: metadata, namedMap: named,
  metadata: {
    id: 'https://w3id.org/citizenship/v2',
    type: 'ContextMetadata',
    shortName: 'v2',
    fileUrl: new URL('../contexts/v2.jsonld', import.meta.url),
    context: v2Context
  }
});
setExportsFromMetadata({
  contextsMap: contexts, metadataMap: metadata, namedMap: named,
  metadata: {
    id: 'https://w3id.org/citizenship/v3',
    type: 'ContextMetadata',
    shortName: 'v3',
    fileUrl: new URL('../contexts/v3.jsonld', import.meta.url),
    context: v3Context
  }
});
