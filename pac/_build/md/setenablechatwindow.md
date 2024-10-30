# setEnableChatWindow

Enables or disables chat message selection window.

Works only in multi.

## Code Information

- **Name**: `setEnableChatWindow`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 9c 00`
- **Assembly Address in Memory** : `0x891ad6c`

## Parameters

- `(bool)enabled` *(8 bytes)* : 0 disables chat message selection window.

## Example

Here is one example in hex:

```25 16 9c 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setEnableChatWindow((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ad6c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Save::Get_Save_BaseAddr(1);
  iVar3 = Save::Get_BaseAddr__0x78(uVar2,1);
  if (*(int *)(iVar3 + 100) != 0) {
    FUN_089f9560(*(undefined4 *)(*(int *)(*(int *)(iVar3 + 100) + 0x1cc) + 0x34),*piVar1 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

