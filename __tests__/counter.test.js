const FormData = require('form-data');
const fs = require('fs');
import { createMocks } from 'node-mocks-http';
import counter from '../pages/api/counter';


describe('/api/counter', () => {
  test('returns json containing total number of lines, blank lines, comments and code lines', async () => {
    var form = new FormData();
    form.append('file', fs.readFileSync('./__tests__/sample.java'));
    form.append('type', 'java');
    const { req, res } = createMocks({
      method: 'POST',
      body: form.getBuffer().toString()    
    });

    await counter(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData()).total_lines).toBe(22);
    expect(JSON.parse(res._getData()).comment_lines_count).toBe(1);
    expect(JSON.parse(res._getData()).blank_lines_count).toBe(4);
    expect(JSON.parse(res._getData()).code_lines_count).toBe(17);
  });
});
