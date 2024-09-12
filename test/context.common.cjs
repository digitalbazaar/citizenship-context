/*!
 * Copyright (c) 2024 Digital Bazaar, Inc. All rights reserved.
 */
module.exports.tests = function({contexts, metadata, named, expect}) {
  it('contexts', async () => {
    expect(metadata).to.exist;
    expect(metadata.size).to.equal(3);
  });

  it('metadata', async () => {
    expect(metadata).to.exist;
    expect(metadata.size).to.equal(3);
  });

  it('named', async () => {
    expect(named).to.exist;
    expect(named.size).to.equal(3);
  });

  it('contents', async () => {
    const ids = [
      {
        id: 'https://w3id.org/citizenship/v1',
        name: 'v1'
      },
      {
        id: 'https://w3id.org/citizenship/v2',
        name: 'v2'
      },
      {
        id: 'https://w3id.org/citizenship/v3',
        name: 'v3'
      }
    ];

    for(const {id, name} of ids) {
      expect(contexts.has(id)).to.be.true;
      expect(metadata.has(id)).to.be.true;
      expect(named.has(name)).to.be.true;
      const ctx = contexts.get(id);
      const md = metadata.get(id);
      const nmd = named.get(name);
      expect(ctx).to.have.property('@context');
      expect(md.id).to.equal(id);
      expect(ctx).to.deep.equal(md.context);
      expect(nmd).to.equal(md);
    }
  });
};
