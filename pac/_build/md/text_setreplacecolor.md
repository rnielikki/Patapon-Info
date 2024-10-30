# text_setReplaceColor

Sets colour of some magic word texts.

## Code Information

- **Name**: `text_setReplaceColor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 37 00`
- **Assembly Address in Memory** : `0x894cc70`

## Parameters

- `(int)magicword_index` *(8 bytes)* : The `X` value from `\<NX>`.
- `(int)red` *(8 bytes)* : Red value of the text colour, in range of 0~255.
- `(int)green` *(8 bytes)* : Green value of the text colour, in range of 0~255.
- `(int)blue` *(8 bytes)* : Blue value of the text colour, in range of 0~255.
- `(int)alpha` *(8 bytes)* : Alpha value of the text colour, in range of 0~255.

If any of RGBA is -1, this will reset the colour to default.

## Example

Here is one example in hex:

```25 0a 37 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / ff 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / ff 00 00 00```

Which is interpreted as:

```c
text_setReplaceColor((int)1, (int)255, (int)0, (int)0, (int)255)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894cc70(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  uint *puVar3;
  uint *puVar4;
  int *piVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (uint *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  if (((((int)*puVar2 < 0) || ((int)*puVar3 < 0)) || ((int)*puVar4 < 0)) || (*piVar5 < 0)) {
    iVar6 = *piVar1 * 8;
    *(undefined4 *)(iVar6 + 0x8ab93b8) = 0xffffffff;
    *(undefined *)(iVar6 + 0x8ab93bc) = 0;
  }
  else {
    iVar6 = *piVar1 * 8;
    *(uint *)(iVar6 + 0x8ab93b8) =
         *piVar5 << 0x18 | (*puVar4 & 0xff) << 0x10 | *puVar2 & 0xff | (*puVar3 & 0xff) << 8;
    *(undefined *)(iVar6 + 0x8ab93bc) = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

