# checkEqualHeroName

Checks if the hero name is same as certain name. This is used for special hairstyle.

## Code Information

- **Name**: `checkEqualHeroName`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 15 00`
- **Assembly Address in Memory** : `0x894a874`

## Parameters

- `(int *)result` *(8 bytes)* : Variable to *store* if the hero name is identical to the given value. 1 if the hero name is same as `hero_name`, otherwise 0.
- `(String)hero_name` : Name of the hero to compare.

## Example

Here is one example in hex:

```25 0a 15 00 / 04 00 00 00 / 01 00 00 00 / 52 6f 6c 69 / 74 6f 00 00```

Which is interpreted as:

```c
checkEqualHeroName((int *)iVar1, "Rolito")
```


```c
00000514  250A1500:checkEqualHeroName(4:1, "AAA")
00000524  25001700:cmd_ifEQ(4:1, 1.0, 1:56C)
  0000056C  250A1400:setAccessoryIdFileIndex(2:3, 4:0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a874(undefined4 param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined *puVar3;
  int iVar4;
  short *psVar5;
  undefined *puVar6;
  short *psVar7;
  short local_a0 [16];
  undefined local_80 [128];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = &DAT_00000080;
  puVar6 = local_80;
  puVar1 = puVar6;
  while (puVar1 != (undefined *)0x0) {
    *puVar6 = 0;
    puVar6 = puVar6 + 1;
    puVar3 = puVar3 + -1;
    puVar1 = puVar3;
  }
  Pac_Get_StringParam(param_2,local_80);
  *puVar2 = 0;
  Syscall::Kernel::Kernel_Memset(local_a0,0,0x20);
  Message::Write_Value_Final(local_a0,0x20,local_80);
  iVar4 = Save::Get_Save_BaseAddr(1);
  psVar5 = (short *)Message::GetMagicWord(*(int *)(iVar4 + 0x50) + 0x2b408,0xc);
  *puVar2 = 0;
  iVar4 = 0;
  psVar7 = local_a0;
  do {
    if (*psVar5 != *psVar7) break;
    if (*psVar5 == 0) {
      *puVar2 = 1;
      break;
    }
    iVar4 = iVar4 + 1;
    psVar7 = psVar7 + 1;
    psVar5 = psVar5 + 1;
  } while (iVar4 < 0x10);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

