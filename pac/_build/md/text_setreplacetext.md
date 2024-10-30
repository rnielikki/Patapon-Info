# text_setReplaceText

Replaces magic word text to something else.

## Code Information

- **Name**: `text_setReplaceText`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 36 00`
- **Assembly Address in Memory** : `0x894cbb4`

## Parameters

- `(int)magicword_index` *(8 bytes)* : The `X` value from `\<NX>`.
- `(Address)message_address` : Message Address in [**PAC file**](./guide/about-message.md#message-table).
  - **Do not make message too long** or it might cause issue with message displaying, it might fit max 32 letters (not tested).

## Example

Here is one example in hex:

```25 0a 36 00 / 02 00 00 00 / 01 00 00 00 / d4 e5 05 00```

Which is interpreted as:

```c
text_setReplaceText((int)1, 0x5e5d4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894cbb4(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  undefined4 uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,0,0,4);
  iVar5 = *piVar2;
  if (iVar5 < 0) {
    uVar6 = 0;
  }
  else {
    iVar3 = FUN_0883bc1c(param_2);
    iVar4 = Save::Get_Save_BaseAddr(1);
    uVar6 = Message::Get_MsgAddr_With_FullID(iVar4 + 0x98,*(undefined4 *)(iVar3 + iVar5));
  }
  iVar5 = Save::Get_Save_BaseAddr(1);
  Write_NX_Magicword(*(int *)(iVar5 + 0x50) + 0x2b408,*puVar1,uVar6);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

