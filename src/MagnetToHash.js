import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Check from '@material-ui/icons/Check';
import copy from 'copy-to-clipboard';

const magnetRegExp = /magnet:\?xt=urn:btih:([0-9A-F]{40}).*$/i;
const btihRegExp = /^[0-9A-F]{40}$/i;

class MagnetToHash extends Component {
  state = {
    magnetLink: "",
    hash: "",
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    ("磁力链接转哈希" !== document.title) && (document.title = "磁力链接转哈希");
  }

  componentDidUpdate() {
  }

  handleInputChange = event => {
    const magnetLink = event.target.value;
    const results = magnetRegExp.exec(magnetLink);
    const hash = null === results ? "" : results[1];
    console.log(hash);
      this.setState({
        magnetLink: magnetLink,
        hash:hash,
      })
  }

  handleCopy = () => {
    0 != this.state.hash.length && (copy(this.state.hash),alert("已复制到剪切板"));
  }

  render() {
    const {magnetLink, hash} = this.state;

    return (
      <div style={{marginTop:"1.75em"}}>
        <p className="App-intro">
          在输入框中复制<code>磁力链接</code>，本程序提取出btih字段，点击对勾复制哈希到剪切板
        </p>
        <TextField
          onChange={this.handleInputChange.bind(this)}
          placeholder="请输入待处理的磁力链接"
          value={magnetLink}
          label="磁力链接："
          multiline={true}
          style={{marginBottom:"0.75em"}}
        />
        <div style={{marginLeft:"1em", marginRight:"1em"}}>
          {
            magnetRegExp.test(magnetLink)
            &&
            <Paper elevation={4} style={{marginTop:"0.25em"}}>
              <br/>
              <Typography variant="headline" component="h3" style={{marginTop:"0.75em"}}>
                {"哈希值：" + hash}
              </Typography>
              <IconButton
                onClick={this.handleCopy.bind(this)}
                color="inherit"
                style={{marginTop:"0.75em",marginBottom:"0.75em"}}
              >
                <Check/>
              </IconButton>
            </Paper>
          }
        </div>
      </div>
    );
  }
}

export default MagnetToHash;